export interface GameDetails {
    id: number;
    name: string;
    coverImage: string;
    gameType: string | null;
    description: string | null;
    platforms: string[] | null;
    genres: string[] | null;
    releaseDate: string | null;
    developers: { id: number; name: string }[] | null;
    publishers: { id: number; name: string }[] | null;
    trailers?: { id: number; thumbnail: string; video: string }[] | null;
    screenshots?: string[] | null;
    estimatedTimeToBeat?: {
        story: number | null;
        storyAndExtras: number | null;
        completionist: number | null;
    };
}
