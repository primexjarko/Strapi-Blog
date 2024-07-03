import Card from "@/components/card/card";
import config from "@/config";
import getBlogsData from "@/helpers/get-blogs-data";

const Home = async () => {
  const [featuredBlogs, blogs] = await Promise.all([
    await getBlogsData("filters[isFeatured][$eq]=true"),
    await getBlogsData("filters[isFeatured][$eq]=false"),
  ]);

  return (
    <div className="container pb-80">
      {featuredBlogs.data.map((featuredBlog) => {
        return (
          <Card
            key={featuredBlog.attributes.id}
            imgSrc={`${config.api}${featuredBlog.attributes.FeaturedImage.data.attributes.url}`}
            imgAlt="featured Image"
            href={`/${featuredBlog.attributes.slug}`}
            title={featuredBlog.attributes.Title}
            label={featuredBlog.attributes.Category}
            summary={featuredBlog.attributes.Summary}
            className="mb-30"
          />
        );
      })}

      <div className="row">
        {blogs.data.map((blog) => {
          return (
            <div className="col col-3 m-mw-100" key={blog.attributes.id}>
              <Card
                imgSrc={`${config.api}${blog.attributes.Thumbnail.data.attributes.url}`}
                imgAlt="featured Image"
                href={`/${blog.attributes.slug}`}
                title={blog.attributes.Title}
                label={blog.attributes.Category}
                summary={blog.attributes.Summary}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
