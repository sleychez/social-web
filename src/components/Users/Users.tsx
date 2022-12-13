import React, {FC, useEffect} from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType, follow, requestUsers, unfollow} from "../../redux/users-reducer";
import {useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../redux/users-selectors";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import { useSearchParams } from "react-router-dom";




type PropsType = {}

export const Users: FC<PropsType> = () => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const users = useSelector(getUsers)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useAppDispatch()

    let [searchParams, setSearchParams] = useSearchParams();

    const searchTerm = searchParams.get('term') || ''

    const searchCurrentPage = +(searchParams.get('currentPage') || '1')

    const searchFriend = searchParams.get('friend') === 'null' ? null : Boolean(searchParams.get('friend'))

    useEffect(() => {
        dispatch(requestUsers(searchCurrentPage, pageSize, {term: searchTerm, friend: searchFriend} ))
    }, [])

    useEffect(() => {
        setSearchParams({term: filter.term, friend: String(filter.friend), currentPage: String(currentPage)})
    }, [filter, currentPage])



    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1,pageSize, filter))
    }

    const following = (userId: number) => {
        dispatch(follow(userId))
    }

    const unfollowing = (userId: number) => {
        dispatch(unfollow(userId))
    }



    return <div>

        <UsersSearchForm onFilterChanged={onFilterChanged}/>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
       <div>
        {
            users.map(user => <User user={user}
                                    followingInProgress={followingInProgress}
                                    key={user.id}
                                    unfollow={unfollowing}
                                    follow={following}
                />
            )
        }
       </div>
    </div>
}

export default Users;