import React from 'react';
import { ButtonInLine } from './Button';
import './Story.css';
const Story = ({ story, columns }) => {
  console.log(story);
  const { title, url, author, num_comments, points, objectID, onArchive } = story;

  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{num_comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }}>
        <ButtonInLine onClick={() => onArchive(objectID)}>Archive</ButtonInLine>
      </span>
    </div>
  );
};

export default Story;
