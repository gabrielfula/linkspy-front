export const getCookie = (name: string): string | null => {
     const value = `; ${document.cookie}`;
     const parts = value.split(`; ${name}=`);
     if (parts.length === 2) return parts.pop()?.split(";").shift() || null;

     return null;
}

export const firstLetters = (text: string) => {
     const parts = text.trim().split(" ");
     const first = parts[0]?.[0] ?? "";
     const second = parts[1]?.[0] ?? "";

     return (first + second).toUpperCase();
}