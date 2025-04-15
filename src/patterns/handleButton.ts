export const handleToggle = (
    setState: React.Dispatch<React.SetStateAction<boolean>>,
    state: boolean
) => {
    setState(!state);
};
