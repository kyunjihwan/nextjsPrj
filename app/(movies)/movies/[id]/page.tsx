import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

type Props = {
  params: {
    id: string;
  };
};

export default async function MovieDetail({ params }: Props) {
  return (
    <div>
      <h1>Movie Detail Page</h1>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={params.id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={params.id} />
      </Suspense>
    </div>
  );
}
