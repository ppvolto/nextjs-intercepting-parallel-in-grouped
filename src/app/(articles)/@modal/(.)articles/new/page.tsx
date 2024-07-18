import { CreateArticleCard } from "@/app/(articles)/_components/CreateArticleCard";
import { Modal } from "@/components/modal";

export default function Home() {
  return (
    <Modal>
      <CreateArticleCard />
    </Modal>
  );
}
