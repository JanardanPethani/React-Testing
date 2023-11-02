import { fetchAllPosts } from "../../store/services/post.services";
import { useDispatch, useSelector } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useSelector((state) => state.posts);

  const fetchPosts = () => {
    dispatch(fetchAllPosts());
  };

  return (
    <>
      <h3 className="w-full text-center font-bold text-2xl text-white my-5">
        Posts
      </h3>
      <div className="flex gap-1 mx-3 flex-wrap justify-center">
        {isLoading && <div className="text-lg text-cyan-100">...Loading</div>}
        {!isLoading &&
          data.map((postData) => (
            <div
              data-testid="post-card"
              key={postData.id}
              className="flex flex-col p-3 border border-sky-500 rounded-md max-w-[400px] m-1 text-cyan-50"
            >
              <h6 className="text-xl font-semibold">{postData.title}</h6>
              <div className="flex-grow mb-4">{postData.data}</div>
              <div>Publish date: {postData.createdAt}</div>
            </div>
          ))}
        {data.length === 0 && !isLoading && (
          <div className="text-lg text-cyan-100">No data</div>
        )}
      </div>
      <button
        className="fixed bottom-3 left-[50%] p-2 bg-white rounded-md transition-shadow ease-linear hover:shadow-md hover:shadow-cyan-500/50"
        onClick={fetchPosts}
        data-testid="fetch-post-btn"
      >
        Fetch Posts
      </button>
    </>
  );
};

export default Posts;
