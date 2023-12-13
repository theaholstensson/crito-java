import React from 'react'

import img_linkedinsales from './../assets/images/linkedin-sales-solutions-Mis5fyJi7Q0-unsplash.jpg'
import img_emiliano from './../assets/images/emiliano-vittoriosi-vEN1bsdSjxM-unsplash.jpg'
import img_kobuagency from './../assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg'

const ArticleNewsSection = () => {
  return (
    <section className="article-news">
        <div className="container">
            <h3>Article & News</h3>
            <div className="browse">
                <h1>Get Every Single Article & News</h1>
                <a className="btn-transparent" href="news.html" target="blank">Browse Articles<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>

            <div className="articles">
                <a href="25-mar-article.html"><div className="news">
                    <div className="img-date">
                        <div className="image">
                            <img src={img_linkedinsales} alt="A happy woman with brown hair in a dark blue shirt sitting on a chair beside a table, looking to the upper left corner" />
                        </div>
                        <div className="date-box">
                            <div className="date">
                                <h2>25</h2>
                                <p>Mar</p>
                            </div>
                        </div>
                    </div>
                    <h4>Business</h4>
                    <h2>How To Use Digitalization In The Classroom</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div></a>

                <a href="17-mar-article.html"><div className="news">
                    <div className="img-date">
                        <div className="image">
                            <img src={img_emiliano} alt="What Chat GPT shows when you're about to start a new conversation" />
                        </div>
                        <div className="date-box">
                            <div className="date">
                                <h2>17</h2>
                                <p>Mar</p>
                            </div>
                        </div>
                    </div>
                    <h4>Business</h4>
                    <h2>How To Implement Chat GPT In Your Projects</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div></a>

                <a href="13-mars-article.html"><div className="news">
                    <div className="img-date">
                        <div className="image">
                            <img src={img_kobuagency} alt="A black thick book, a white thinner book and a white phone on top of eachother on a white desk" />
                        </div>
                        <div className="date-box">
                            <div className="date">
                                <h2>13</h2>
                                <p>Mar</p>
                            </div>
                        </div>
                    </div>
                    <h4>Business</h4>
                    <h2>The Guide To Support Modern CSS Design</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div></a>
            </div>

            <div className="dots">
                <a className="active" href="#"><i className="fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-solid fa-circle"></i></a>
            </div>

        </div>
    </section>
  )
}

export default ArticleNewsSection