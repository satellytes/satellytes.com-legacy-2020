import React from "react";
import { Share } from './share';
import DateInfo from "./date-info";
import Separator from "./separator";

export const ContentFooter = (props) => {
  const {updatedAt, createdAt} = props;
  const showShare = props.showShare;

  return (
    <div>
      <DateInfo updatedAt={updatedAt} createdAt={createdAt}/>
      <Separator/>

      {showShare ?
      (
        <Share {...props} />
      ): null}
    </div>
  )
}