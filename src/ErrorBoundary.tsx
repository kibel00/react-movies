import React, { ReactElement, ReactNode } from "react";

export default class ErrorBoundary extends React.Component<errorBoundaryProps, errorBoundaryStates>{
    constructor(props: errorBoundaryProps) {
        super(props);
        this.state = { thereIsError: false, message: '' }
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.log(error);
        console.log(errorInfo);
    }

    static getDerivedStateFromError(error: any) {
        console.log(error);
        return { thereIsError: true, message: error }
    }

    render() {
        if (this.state.thereIsError) {
            if (this.props.errorUI) {
                return this.props.errorUI
            } else {
                return <h3>{this.state.message}</h3>
            }
        }

        return this.props.children;
    }
}

interface errorBoundaryStates {
    thereIsError: boolean;
    message: string;
}


interface errorBoundaryProps {
    errorUI?: ReactElement;
    children: ReactNode;
}