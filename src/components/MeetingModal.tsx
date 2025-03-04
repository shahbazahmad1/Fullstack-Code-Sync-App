import { useState } from "react";

interface MeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    isJoinMeeting: boolean;
};

function MeetingModal({ isOpen, onClose, title, isJoinMeeting }: MeetingModalProps) {
    const [meetingUrl, setMeetingUrl] = useState("");

    const createMeeting = async () => {};
    const joinMeeting = async () => {};
    return (
        <div>MeetingModal</div>
    )
}

export default MeetingModal;
