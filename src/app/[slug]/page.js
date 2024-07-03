import getCategoryColor from "@/helpers/get-category-color";
import Image from "next/image";
import styles from "./style.module.sass";
import getBlogsData from "@/helpers/get-blogs-data";
import config from "@/config";

const BlogDetails = async (props) => {
  const blogs = await getBlogsData(`filters[slug][$eq]=${props.params.slug}`);
  if (blogs.data.length === 0) return null;
  const blog = blogs.data[0];
  return (
    <div className="container">
      <div className="row mb-50">
        <div className="col col-9">
          <div
            className={`h6 mb-20 c-${getCategoryColor(
              blog.attributes.Category
            )}`}
          >
            {blog.attributes.Category}
          </div>
          <h2> {blog.attributes.Title}</h2>
        </div>
      </div>
      <Image
        className={`${styles.featuredImage} mb-50`}
        src={`${config.api}${blog.attributes.FeaturedImage.data.attributes.url}`}
        alt="details image"
        width="1280"
        height="400"
      />
      <div className="row">
        <div className="col col-9">
          <p>{blog.attributes.Content}</p>
        </div>
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const blogs = await getBlogsData();
  return blogs.data.map((blog) => {
    slug: blog.attributes.slug;
  });
};

export default BlogDetails;
