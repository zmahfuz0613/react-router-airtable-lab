import React, { useState } from "react"
import axios from "axios"

function CreatePost(props) {
  const [author, updateAuthor] = useState('')
  const [title, updateTitle] = useState('')
  const [text, updateText] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await axios.post("https://api.airtable.com/v0/appSLUxVBuBVT7yD4/Table%201", {
      fields: {
        title: title,
        author: author,
        text: text
      }
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json'
      }
    })
    props.updateFetchBlogPosts(!props.fetchBlogPosts)
    updateAuthor('')
    updateText('')
    updateTitle('')
  }

  return <form onSubmit={handleSubmit}>
    <h2>New Blog Post</h2>
    <label htmlFor="author">Author</label>
    <input type="text" id="author" onChange={e => updateAuthor(e.target.value)} value={author} />
    <label htmlFor="title">Title</label>
    <input type="text" id="title" onChange={e => updateTitle(e.target.value)} value={title} />
    <label htmlFor="text">Text</label>
    <textarea name="text" id="text" cols="30" rows="10" onChange={e => updateText(e.target.value)} value={text}></textarea>
    <input type="submit" value="Create Post" />
  </form>

}

export default CreatePost

// Update with Recipe info...