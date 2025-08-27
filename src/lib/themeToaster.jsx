import { Toaster } from "react-hot-toast";

export default function ThemeToaster() {
    return (
        <Toaster
            position="top-right"
            gutter={8}
            toastOptions={{
                // Áp dụng cho TẤT CẢ toast
                style: {
                    background: "hsl(var(--card))",
                    color: "hsl(var(--foreground))",
                    border: "1px solid hsl(var(--border))",
                    boxShadow: "0 10px 30px rgba(0,0,0,.15)",
                },
                // Icon mặc định đồng bộ primary
                iconTheme: {
                    primary: "hsl(var(--primary))",
                    secondary: "hsl(var(--primary-foreground))",
                },
                // Biến thể thành công: nền primary, chữ primary-foreground
                success: {
                    style: {
                        background: "hsl(var(--primary))",
                        color: "hsl(var(--primary-foreground))",
                        border: "1px solid hsl(var(--primary))",
                    },
                    iconTheme: {
                        primary: "hsl(var(--primary-foreground))",
                        secondary: "hsl(var(--primary))",
                    },
                },
                error: {
                    style: {
                        background: "hsl(var(--card))",
                        color: "hsl(var(--foreground))",
                        border: "1px solid hsl(var(--border))",
                    },
                },
            }}
        />
    );
}
