import React from "react";

const initialState = {
    title: "",
    email: "",
    comment: "",
    complete: false,
};

class ContactMe extends React.Component {
    constructor() {
        super();
        this.state = initialState;
    }

    async insertData(commentdata) {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                data: commentdata,
            }),
        });
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    reset = () => {
        this.setState(initialState);
    };

    render() {
        const { title, email, comment, complete } = this.state;
        return (
            <section data-test="component-contact">
                <div className="container contactWindow">
                    <div className="contact">
                        {!complete ? (
                            <div className="flex flex-col">
                                <div className="contactHeading">Comment</div>
                                <div className="contactGrid">
                                    <label htmlFor="title">Title:</label>
                                    <input
                                        name="title"
                                        value={title}
                                        onChange={(e) => this.handleChange(e)}
                                    ></input>
                                    <label htmlFor="email">
                                        Email Address:
                                    </label>
                                    <input
                                        name="email"
                                        value={email}
                                        onChange={(e) => this.handleChange(e)}
                                    ></input>
                                    <label htmlFor="comment">Comment:</label>
                                    <textarea
                                        name="comment"
                                        value={comment}
                                        onChange={(e) => this.handleChange(e)}
                                    ></textarea>
                                    <div className="hidden md:block"></div>
                                    <div className="hidden md:block"></div>
                                    <div className="contactActionBtn">
                                        <button
                                            type="submit"
                                            onClick={() => {
                                                this.insertData({
                                                    title,
                                                    email,
                                                    comment,
                                                });
                                                this.setState((prevState) => ({
                                                    complete:
                                                        !prevState.complete,
                                                }));
                                            }}
                                        >
                                            Submit
                                        </button>
                                        <button onClick={() => this.reset()}>
                                            Reset
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="font-juliusSansOne text-3xl">
                                Thanks for your comment !
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactMe;
