import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import ChatInput from "@/components/ChatInput";
import { sortedMessagesRef } from "@/lib/converters/Message";
import { getDocs } from "firebase/firestore";
import ChatMessages from "@/components/ChatMessages";
import ChatMembersBadge from "@/components/ChatMembersBadge";
import AdminControls from "@/components/AdminControls";
import { chatMembersRef } from "@/lib/converters/ChatMembers";
import { redirect } from "next/navigation";

type Props = {
  params: {
    chatId: string;
  };
};

async function ChatPage({ params: { chatId } }: Props) {
  const session = await getServerSession(authOptions);
  const initialMessages = (await getDocs(sortedMessagesRef(chatId))).docs.map(
    (doc) => doc.data()
  );
  const hasAccess = (await getDocs(chatMembersRef(chatId))).docs
    .map((doc) => doc.id)
    .includes(session?.user.id!);

  if (!hasAccess) {
    redirect("/chat?error=permission");
  }

  return (
    <div className="flex flex-col h-screen justify-between">
      <AdminControls chatId={chatId} />

      <ChatMembersBadge chatId={chatId} />

      <div className="flex-1">
        <ChatMessages
          chatId={chatId}
          session={session}
          initialMessages={initialMessages}
        />
      </div>

      <ChatInput chatId={chatId} />
    </div>
  );
}

export default ChatPage;
