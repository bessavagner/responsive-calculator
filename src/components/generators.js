/* Generate unique keys */
export const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
}
