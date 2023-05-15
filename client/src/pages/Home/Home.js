import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import "./Home.css";
import "./homescript.js";

const Home = () => {
    const video = ["2.jpg", "3.jpg", "4.jpg"];

    return (
        <div>
            <section className="home">
                <video src={require("../../resources/1.jpg")} muted autoPlay loop className="video-slider active"></video>
                <video src={require("../../resources/1.jpg")} muted autoPlay loop className="video-slider"></video>
                <video src={require("../../resources/1.jpg")} muted autoPlay loop className="video-slider"></video>
                <video src={require("../../resources/1.jpg")} muted autoPlay loop className="video-slider"></video>

                <div className="content active">
                    <h1>Instruction 1</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

                <div className="content">
                    <h1>Instruction 2</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

                <div className="content">
                    <h1>Instruction 3</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

                <div className="content">
                    <h1>Instruction 4</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

                <div className="slider-navigation">
                    <div className="nav-btn active"></div>
                    <div className="nav-btn"></div>
                    <div className="nav-btn"></div>
                    <div className="nav-btn"></div>
                </div>
            </section>
        </div>
    );
};

export default Home;
