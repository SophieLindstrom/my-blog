import axios from "axios";
import { title } from "process";
import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function CreatePostRoute() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isSaving, setisSaving] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [authorError, setauthorError] = useState(false);
  const [textError, settextError] = useState(false);

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
      const res = await axios.post("http://localhost:4000/addpost", {
        title,
        author,
        image,
        text,
      });

      if (res) {
        setShowMessage(true);
      }
    }

    setisSaving(false);
  };
  return (
    <div>
      <h1 className="text-2xl">Create Post</h1>
      <form onSubmit={submit} className="grid gap-4">
        <div>
          <input
            className="bg-slate-300 border-2 border-black rounded p-4"
            type="text"
            placeholder="Titel"
            onChange={(event) => setTitle(event.target.value)}
          />
          {titleError && (
            <div className="text-error text-xs">Fel på titeln</div>
          )}
        </div>
        <div>
          <input
            className="bg-slate-300 border-2 border-black rounded p-4"
            type="text"
            placeholder="Författare"
            onChange={(event) => setAuthor(event.target.value)}
          />
          {authorError && (
            <div className="text-error text-xs">Fel på författaren</div>
          )}
        </div>
        <div>
          <input
            className="bg-slate-300 border-2 border-black rounded p-4"
            type="text"
            placeholder="Lägg till bild"
            onChange={(event) => setImage(event.target.value)}
          />
        </div>

        <div>
          <label className="block">Innehåll</label>
          <textarea
            className="bg-slate-300 border-2 border-black rounded p-4"
            onChange={(event) => setText(event.target.value)}
          ></textarea>
          {textError && (
            <div className="text-error text-xs">Inlägget är för kort</div>
          )}
          <div className="text-xs text-grey">
            Inlägget får vara max 2000 ord
          </div>
        </div>
        <div>
          <button
            className="bg-black border-black rounded p-4 text-white"
            type="submit"
            disabled={isSaving}
          >
            Posta
          </button>
          {showMessage && <div>Nu har du postat ett inlägg!</div>}
        </div>
      </form>
    </div>
  );
}
