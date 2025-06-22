import { cookies } from 'next/headers';

export async function getServerCookies() {
    const cookieStore = await cookies();
    return {
        token: cookieStore?.get('token')?.value,
        accountCode: cookieStore?.get('account_code')?.value,
    };
}
