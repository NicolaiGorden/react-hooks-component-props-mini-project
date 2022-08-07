import React from "react";
import Article from "./Article";

const ArticleList = props => {
    const { posts } = props

    const articles = posts.map((p)=>{
        return (
            <Article key = {p.id}
            title={p.title}
            date={p.date}
            preview={p.preview}
            />
        )
    })

    return (
        <main>{articles}</main>
    )
}

export default ArticleList