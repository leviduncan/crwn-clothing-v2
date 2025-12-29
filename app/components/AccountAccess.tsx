import React from 'react'

interface AccountAccessProps {
    accType: 'create' | 'sign-up';
}

function AccountAccess({ accType }: AccountAccessProps) {
    const title = accType;
    return (
        <div className="my-4 underline">
            <a href={title === "create" ? "/sign-in" : "/sign-up"}>
                {title === "create" ? "Sign In" : "Create Account"}
            </a>
        </div>
    );
}

export default AccountAccess