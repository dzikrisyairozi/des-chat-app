export type ProductCardProps = {
  id: string;
  vertical_poster_url: string;
  title: string;
  film_type?: string;
  type?: string;
  is_for_sale?: boolean;
  is_for_rent?: boolean;
  main_genre: Genre | string;
  is_added_to_watchlist?: boolean;
  sub_genre: Genre[] | string[];
  description?: string;
  href?: string;
  genre?: Genre[];
  duration?: number | string;
  episode_number?: number;
  views?: number;
  rating?: number;
  rating_count?: number;
  sale_price?: number;
  rent_price?: number;
  season_id?: string;
  season?: null;
  film_id?: string;
  video_url?: string;
  video_status?: string;
  thumbnail_url?: string;
  release_time?: string;
  message?: unknown;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: null;
};

export type Genre = {
  id: number | string;
  name: string;
};
