import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    savePhoto, saveProfile,
    updateStatus
} from "../../redux/profile-reducer";
import {NavigateFunction, useNavigate, useParams} from "react-router";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";


const withRouter = (WrappedComponent: React.ComponentType) => (props:any) => {
    const params = useParams();
    const navigate = useNavigate();
    return (
        <WrappedComponent
            {...props}
            params={params}
            navigate={navigate}

        />
    );
};

type StatePropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    getUserProfile: (userId: number) => void
     getStatus: (userId: number) => void
     updateStatus: (status: string) => void
     savePhoto: (file: File) => void
     saveProfile: (profile: ProfileType) => Promise<any>
}


type PropsType = StatePropsType & DispatchPropsType & {
    navigate: NavigateFunction
    params: {
        userId: string
    }
}

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.navigate('/login')
            }
        }
        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')")
        } else {
            this.props.getUserProfile(userId);
            this.props.getStatus(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.params.userId !== prevProps.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <Profile {...this.props}
                     isOwner={!this.props.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     savePhoto={this.props.savePhoto}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({

    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
) (ProfileContainer);