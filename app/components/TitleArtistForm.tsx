import { faMicrophoneLines, faMusic } from "@fortawesome/free-solid-svg-icons";
import AppInput from "./AppInput";
import AppButton from "./AppButton";

type TitleArtistFormProps = {
  title: string
  artist: string
  setTitle: (value: string) => void
  setArtist: (value: string) => void
  handleSubmit: (evt: React.FormEvent) => void
}
export default function TitleArtistForm({
  title,
  artist,
  setTitle,
  setArtist,
  handleSubmit
}: TitleArtistFormProps) {
  return (
    <form className="flex flex-col gap-[1rem]" onSubmit={handleSubmit}>
      <AppInput
        label="Song Title"
        leadingIcon={faMusic}
        placeholder="Yellow"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <AppInput
        label="Artist / Band"
        leadingIcon={faMicrophoneLines}
        placeholder="Coldplay"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <AppButton
        label="Show Lyrics"
        type="submit"
        disabled={!title || !artist}
      />
    </form>
  );
}
