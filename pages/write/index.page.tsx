import { useState } from 'react';
import { TextEditor, CreateArticleModal } from 'src/components';
import { TitleInput } from 'src/components';

const WritePage = () => {
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();
  const [isOpen, setOpen] = useState<boolean>();
  const articleElements = { title, content };

  const handleOpenModal = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <CreateArticleModal
          handleOpenModal={handleOpenModal}
          articleElements={articleElements}
        />
      )}
      <button onClick={handleOpenModal}>생성하기</button>
      <TitleInput onChange={setTitle} />
      <TextEditor onChange={setContent} />
    </>
  );
};

export default WritePage;
