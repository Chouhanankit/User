const UserReducer = (state, action) => {

    switch (action.type) {

        case "GET_USERS":
            return {
                ...state,
                users: action.payload,
            }
        case "GET_USER":
            return {
                ...state,
                user: action.payload,
            }

        default:
            return state;
    }

}
export default UserReducer;