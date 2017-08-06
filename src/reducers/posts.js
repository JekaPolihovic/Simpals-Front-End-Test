// posts reducer
export default function posts(state = {}, action) {
    switch (action.type) {
        case 'POSTS_LIST_SAVE':
            return action.posts;

        case 'POSTS_ADD_SAVE':
            const post = action.post;
            post.id = post.id || Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
            post.tags = post.tags ? post.tags.split(',') : [];
            return [...state, post];

        case 'POSTS_DELETE_SAVE':
            return state.filter(post =>
                Number(post.id) !== Number(action.post_id)
            );

        // initial state
        default:
            return state;
    }
}