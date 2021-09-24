import React from "react";
import BlogNode from "./BlogNode";

class BlogList extends React.Component {
    constructor() {
        super();
        this.state = {
            searchBox: "",
        };
    }

    handleSearchChange = (e) => {
        const { value } = e.target;
        this.setState({ searchBox: value });
    };

    render() {
        const { data, item, category } = this.props;
        const { searchBox } = this.state;
        return (
            <div data-test="component-blog-blogList" className="blogList">
                <input
                    value={searchBox}
                    onChange={(e) => this.handleSearchChange(e)}
                    placeholder="Type to Search"
                />
                {category
                    ? item.map((post, idx) =>
                          data[idx].tags.includes(category) &&
                          data[idx].title.toLowerCase().includes(searchBox) ? (
                              <BlogNode
                                  key={post}
                                  data={data[idx]}
                                  post={post}
                              />
                          ) : null
                      )
                    : !item
                    ? null
                    : item.map((post, idx) =>
                          data[idx].title.toLowerCase().includes(searchBox) ? (
                              <BlogNode
                                  key={post}
                                  data={data[idx]}
                                  post={post}
                              />
                          ) : null
                      )}
                <div className="pb-96 mb-96" />
            </div>
        );
    }
}

export default BlogList;
