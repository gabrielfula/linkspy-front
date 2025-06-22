'use client'

export const handleLogout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/logout`, {
        method: 'POST',
    });

    localStorage.removeItem("user_name");

    return;
};
