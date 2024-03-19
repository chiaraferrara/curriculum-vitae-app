import { useEffect, useState } from "react";
import {
  BootstrapButton,
  Caption,
  FlexColumn,
  MessageWrapper,
  PTitle,
  Paragr,
} from "../styles/globals";
import { Expand, Subtitles, Title } from "@mui/icons-material";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  setDoc,
} from "@firebase/firestore";
import { db } from "../firebase";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import Links from "./Links";

interface Message {
  id: string;
  email: string;
  subject: string;
  body: string;
  date: string;
}

export default function ContactsForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [yourMessages, setYourMessages] = useState<Message[]>([]);
  const [date, setDate] = useState(new Date().toLocaleString());
  const [idUnivoco, setIdUnivoco] = useState<any>(null);

  useEffect(() => {
    const id = `${Math.floor(Math.random() * 6) + 1}${body
      .split(" ")
      .join("")}`;
    setIdUnivoco(id);
    const messagesonLS = localStorage.getItem("messages" || "[]");
    setYourMessages(JSON.parse(messagesonLS || "[]"));
  }, [yourMessages]);

  const MessagesCollection = collection(db, "messages");

  const handleSubmit = async () => {
    if (idUnivoco != null) {
      await setDoc(doc(db, "messages", `${idUnivoco}`), {
        Date: date,
        Email: email,
        Subject: subject,
        Body: body,
        id: idUnivoco,
      });
    }
    setEmail("");
    setSubject("");
    setBody("");
  };

  const addToYourMessages = () => {
    const messagesonLS = localStorage.getItem("messages");
    const registeredEmails = JSON.parse(messagesonLS || "[]");

    if (registeredEmails !== null) {
      setYourMessages(registeredEmails);
      const newMessage = {
        id: idUnivoco,
        email,
        subject,
        body,
        date: new Date().toLocaleString(),
      };

      registeredEmails.push(newMessage);
      localStorage.setItem("messages", JSON.stringify(registeredEmails));
    }
  };

  const handleDeletion = async (id: string) => {
    // await db.collection('cities').doc('DC').delete()
    await deleteDoc(doc(MessagesCollection, id));

    const updatedMessages = yourMessages.filter((message) => message.id !== id);
    localStorage.setItem("messages", JSON.stringify(updatedMessages));
    const index = updatedMessages.findIndex(
      (message: Message) => message.id === id
    );
    if (index !== -1) {
      updatedMessages.splice(index, 1);
      localStorage.setItem("messages", JSON.stringify(updatedMessages));
    }
  };

const checkEmail = (input: any) => {
    var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,10})$/;
    return regex.test(input);
};

const handleValidEmailClick = () => {
    if (checkEmail(email)) {
        handleSubmit();
        addToYourMessages();
    } else {
        alert("Invalid email address!");
    }
}

  return (
    <>
      <PTitle>Feel free to contact me</PTitle>
      <Links/>
      <div>
        <div style={{ padding: "1%" }}>
          <FlexColumn>
            <TextField
              required
              id="standard-helperText"
              label="Your e-mail here"
              color="secondary"
              defaultValue="Default Value"
              helperText="e-mail field is required."
              variant="standard"
              type="email"
              placeholder="Your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              id="standard-helperText"
              label="Subject"
              color="secondary"
              defaultValue=""
              helperText="Your subject here."
              variant="standard"
              placeholder="Your subject here"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <TextField
              id="standard-helperText"
              label="Message *"
              color="secondary"
              defaultValue=""
              helperText="message field is required."
              variant="standard"
              placeholder="Your message here"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

            <BootstrapButton
              variant="contained"
              color="secondary"
              onClick={() => {
                handleValidEmailClick();
              }}
            >
              Submit
            </BootstrapButton>
            {/* <p style={{margin: "auto", textAlign:"center", fontSize:"10px"}}>You can delete your messages anytime.<br/>(deletion is permanent)</p> */}
          </FlexColumn>
        </div>
      </div>

      {/* <Accordion  style={{width:"80%", margin:"auto"}} defaultExpanded>
        <AccordionSummary
       
          expandIcon={<Expand />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <PTitle>Your previously delivered messages.</PTitle>
        </AccordionSummary>
        <AccordionDetails>
            
          {yourMessages.length ? (
            yourMessages.map((message, index) => (
              <MessageWrapper key={index}>
                <h5 style={{ margin: "0" }}>{message.email}</h5>
                <Caption>{message.date.toString()}</Caption>
                <Paragr>{message.subject}</Paragr>
                <Paragr>{message.body}</Paragr>
                <BootstrapButton
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDeletion(message.id)}
                >
                  Delete
                </BootstrapButton>
              </MessageWrapper>
            ))
          ) : (
            <Typography>You have sent no messages  yet.</Typography>
          )}
          <p style={{margin: "auto", textAlign:"center", fontSize:"10px"}}>This list is only visible to you and deletion has permanent effects.</p>
        </AccordionDetails>
      </Accordion> */}
      
    </>
  );
}
