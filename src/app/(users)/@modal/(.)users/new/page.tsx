import { CreateUserCard } from "@/app/(users)/_components/CreateUserCard";
import { Modal } from "@/components/modal";

export default function Home() {
  return (
    <Modal>
      <CreateUserCard />
    </Modal>
  );
}
