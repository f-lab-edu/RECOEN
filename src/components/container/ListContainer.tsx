import UpperLayout from 'src/components/hero/UpperLayout';
import ArticleList from 'src/components/article/ArticleList';
import Hr from 'src/components/ui/Hr';

interface Props {
  children: React.ReactElement[];
}

const ListContainer = ({ children }: Props) => {
  return <>{children}</>;
};

export default ListContainer;

ListContainer.UpperLayout = UpperLayout;
ListContainer.ArticleList = ArticleList;
ListContainer.Hr = Hr;
