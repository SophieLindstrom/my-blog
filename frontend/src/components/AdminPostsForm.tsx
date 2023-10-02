import axios from "axios";
import { title } from "process";
import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { PostModel, PostModelDataImport } from "./Post";
import { useNavigate } from "react-router-dom";

export default function AdminPostsForm({ post }: { post?: PostModel }) {
  const [title, setTitle] = useState(post?.title ?? "");
  const [author, setAuthor] = useState(post?.author ?? "");
  const [image, setImage] = useState(post?.image ?? "");
  const [text, setText] = useState(post?.text ?? "");
  const [showMessage, setShowMessage] = useState(false);
  const [isSaving, setisSaving] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [authorError, setauthorError] = useState(false);
  const [textError, settextError] = useState(false);
  const navigate = useNavigate();

  // Deklarera en funktion som körs när användaren klickar på "Submit"-knappen

  const submit = async (e: any) => {
    e.preventDefault(); // Förhindra att formuläret skickas iväg och att sidan laddas om
    setisSaving(true);

    if (title.length < 2) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (author.length < 2) {
      setauthorError(true);
    } else {
      setauthorError(false);
    }

    if (text.length < 2) {
      settextError(true);
    } else {
      settextError(false);
    }

    if (!titleError || !authorError || !textError) {
      let res;
      if (post?.id) {
        res = await axios.post("http://localhost:4000/editpost", {
          id: post?.id,
          title,
          author,
          image,
          text,
        });
      } else {
        res = await axios.post<PostModelDataImport>(
          "http://localhost:4000/addpost",
          {
            title,
            author,
            image,
            text,
          }
        );
      }

      if (res) {
        const id = res.data.id;
        console.log(res);

        if (id) {
          const url = `/post/${id}`;
          navigate(url);
        }
      }
    }

    setisSaving(false);
  };
  return (
    <form onSubmit={submit} className="grid gap-4">
      <div>
        <label className="block">Titel</label>
        <input
          className="bg-slate-300 border-2 w-full border-black rounded p-4"
          type="text"
          placeholder="T.ex. I dag bloggade jag"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {titleError && <div className="text-error text-xs">Fel på titeln</div>}
      </div>
      <div>
        <label className="block">Författare</label>
        <input
          className="bg-slate-300 border-2 w-full border-black rounded p-4"
          type="text"
          placeholder="T.ex. J.K. Rowling"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        {authorError && (
          <div className="text-error text-xs">Fel på författaren</div>
        )}
      </div>
      <div>
        <label className="block">Lägg till bild</label>
        <input
          className="bg-slate-300 border-2 w-full border-black rounded p-4"
          type="text"
          placeholder="Länka till en bildadress"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </div>

      <div>
        <label className="block">Innehåll</label>
        <textarea
          value={text}
          className="bg-slate-300 border-2 w-full border-black rounded p-4"
          placeholder="Skriv ditt inlägg"
          onChange={(event) => setText(event.target.value)}
        ></textarea>
        {textError && (
          <div className="text-error text-xs">Inlägget är för kort</div>
        )}
        <div className="text-xs text-grey">Inlägget får vara max 2000 ord</div>
      </div>
      <div>
        <button
          className="bg-black border-black rounded p-4 text-white"
          type="submit"
          disabled={isSaving}
        >
          {post?.id ? "Uppdatera" : "Posta"}
        </button>
      </div>
    </form>
  );
}
