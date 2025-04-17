export const getCookie = (name: string): string | null => {
     const value = `; ${document.cookie}`;
     const parts = value.split(`; ${name}=`);
     if (parts.length === 2) return parts.pop()?.split(";").shift() || null;

     return null;
}

export const firstLetters = (text: string) => {
     const firstName = text.split("")[0].slice(0, 1);
     const secondName = text.split(" ")[1].slice(0, 1);

     return firstName + secondName;
}