interface InquiryEmailData {
    inquiryId: string;
    name: string;
    phone: string;
    email: string;
    message: string;
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export function inquiryEmail({
    inquiryId,
    name,
    phone,
    email,
    message,
}: InquiryEmailData) {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    />
    <title>New Website Inquiry</title>
</head>

<body
    style="
        margin:0;
        padding:0;
        background:#f5f7f7;
        font-family:Arial,Helvetica,sans-serif;
        color:#1f2937;
    "
>
    <div
        style="
            max-width:640px;
            margin:40px auto;
            background:#ffffff;
            border:1px solid #e5e7eb;
            border-radius:12px;
            overflow:hidden;
        "
    >
        <div
            style="
                background:#00383B;
                padding:24px 28px;
            "
        >
            <h1
                style="
                    margin:0;
                    color:#ffffff;
                    font-size:22px;
                "
            >
                New Website Inquiry
            </h1>

            <p
                style="
                    margin:8px 0 0;
                    color:#d7eeee;
                    font-size:14px;
                "
            >
                A visitor has submitted a new inquiry.
            </p>
        </div>

        <div style="padding:28px;">

            <h2
                style="
                    margin:0 0 18px;
                    font-size:18px;
                    color:#00383B;
                "
            >
                Customer Information
            </h2>

            <table
                style="
                    width:100%;
                    border-collapse:collapse;
                    font-size:14px;
                "
            >
                <tr>
                    <td
                        style="
                            padding:10px 0;
                            color:#6b7280;
                            width:120px;
                        "
                    >
                        Inquiry ID
                    </td>

                    <td
                        style="
                            padding:10px 0;
                            font-weight:600;
                        "
                    >
                        ${escapeHtml(inquiryId)}
                    </td>
                </tr>

                <tr>
                    <td
                        style="
                            padding:10px 0;
                            color:#6b7280;
                        "
                    >
                        Name
                    </td>

                    <td
                        style="
                            padding:10px 0;
                            font-weight:600;
                        "
                    >
                        ${escapeHtml(name)}
                    </td>
                </tr>

                <tr>
                    <td
                        style="
                            padding:10px 0;
                            color:#6b7280;
                        "
                    >
                        Phone
                    </td>

                    <td style="padding:10px 0;">
                        <a
                            href="tel:${escapeHtml(phone)}"
                        >
                            ${escapeHtml(phone)}
                        </a>
                    </td>
                </tr>

                <tr>
                    <td
                        style="
                            padding:10px 0;
                            color:#6b7280;
                        "
                    >
                        Email
                    </td>

                    <td style="padding:10px 0;">
                        <a
                            href="mailto:${escapeHtml(email)}"
                        >
                            ${escapeHtml(email)}
                        </a>
                    </td>
                </tr>
            </table>

            <div
                style="
                    height:1px;
                    background:#e5e7eb;
                    margin:24px 0;
                "
            ></div>

            <h2
                style="
                    margin:0 0 12px;
                    font-size:18px;
                    color:#00383B;
                "
            >
                Customer Message
            </h2>

            <div
                style="
                    background:#f8fafc;
                    border-radius:8px;
                    padding:16px;
                    font-size:14px;
                    line-height:1.6;
                "
            >
                ${escapeHtml(message).replace(
                    /\n/g,
                    "<br />"
                )}
            </div>
        </div>

        <div
            style="
                padding:18px 28px;
                background:#f8fafc;
                border-top:1px solid #e5e7eb;
            "
        >
            <p
                style="
                    margin:0;
                    color:#6b7280;
                    font-size:12px;
                "
            >
                This notification was generated
                automatically by WANDER-INDIA.
            </p>
        </div>
    </div>
</body>
</html>
`;
}