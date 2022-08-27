import List from "@/components/Common/List/List";
import ListItem from "@/components/Common/List/ListItem";

const headerAnchorCss =
  "nav-link block p-2 text-gray-600 hover:text-sky-200 hover:cursor-pointer focus:text-amber-400 transition duration-150 ease-in-out";
const headerListItemCss = "nav-item";
const headerListCss = "navbar-nav mr-auto flex justify-center";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
        <div className="px-6 w-full flex items-center justify-between">
          <div
            className="navbar-collapse collapse grow items-center"
            id="navbarSupportedContentY"
          >
            <List className={headerListCss}>
              <ListItem
                link="/"
                content="All Campaigns"
                anchorClassName={headerAnchorCss}
                listItemClassName={headerListItemCss}
              />
              <ListItem
                link="/campaigns/newCampaign"
                content="Create New Campaign"
                anchorClassName={headerAnchorCss}
                listItemClassName={headerListItemCss}
              />
              <ListItem
                link="/campaigns/newCampaign"
                content="All Requests"
                anchorClassName={headerAnchorCss}
                listItemClassName={headerListItemCss}
              />
            </List>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
