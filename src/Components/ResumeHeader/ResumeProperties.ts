class ResumeProperties {
    constructor() {
        this.imgSrc = '';
        this.title = '';
        this.date = '';
    }

    imgSrc: string;
    title: string;
    date: string;
    child?: React.ReactNode
}

export default ResumeProperties;