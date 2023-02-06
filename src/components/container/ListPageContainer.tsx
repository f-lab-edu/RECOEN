import UpperLayout from 'src/components/hero/UpperLayout';
import ArticleList from 'src/components/article/ArticleList';
import Hr from 'src/components/ui/Hr';

interface Props {
  children: React.ReactElement[];
}

const ListPageContainer = ({ children }: Props) => {
  return <>{children}</>;
};

export default ListPageContainer;

ListPageContainer.UpperLayout = UpperLayout;
ListPageContainer.ArticleList = ArticleList;
ListPageContainer.Hr = Hr;
