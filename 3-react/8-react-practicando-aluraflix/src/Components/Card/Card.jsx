import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  CardActions,
  CardContainer,
  CardImage,
  LiteYouTubeEmbedStyled,
  IconButton,
} from "./Card.styled";

import { useVideoContext } from "../../Contexts/VideoContext";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
//import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const Card = ({ video }) => {
  const { deleteVideo, updateVideo } = useVideoContext();

  const handleEdit = () => {
    const updatedVideo = { ...video, title: "Nuevo Título" }; // Cambia según lo que necesites
    updateVideo(video.id, updatedVideo);
  };

  return (
    <CardContainer>
      {/*<CardImage src={video.img} alt={video.title} />*/}
      <LiteYouTubeEmbedStyled 
      id={video.videoID}
      thumbnail={video.img}
      aspectHeight={6}
      aspectWidth={12}
      />
      
      <CardActions>
        <IconButton onClick={() => deleteVideo(video.id)}>
          <FaTrashAlt />
        </IconButton>

        <IconButton onClick={handleEdit}>
          <FaEdit />
        </IconButton>
      </CardActions>
    </CardContainer>
  );
};

export default Card;
