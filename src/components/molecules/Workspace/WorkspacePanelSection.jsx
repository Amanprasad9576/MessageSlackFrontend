import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { PlusIcon } from "lucide-react";

export const WorkspacePanelSection = ({ children, label, onIconClick }) => {
    const [open, setOpen] = useState(true);

    return (
        <div className="flex flex-col mt-3 px-2">
            {/* Header */}
            <div className="flex items-center px-3.5 group">
                {/* Expand/Collapse Button */}
                <Button
                    onClick={() => setOpen(!open)}
                    variant="transparent"
                    className="p-0.5 text-sm size-6 text-[#f9edffcc]"
                >
                    {open ? <FaCaretDown className="size-4" /> : <FaCaretRight className="size-4" />}
                </Button>

                {/* Label */}
                <Button
                    size="sm"
                    variant="transparent"
                    className="group px-1 text-sm text-[#f9edffcc] h-[30px] flex items-center overflow-hidden"
                >
                    <span>{label}</span>
                </Button>

                {/* Plus Button */}
                {onIconClick && (
                    <Button
                        size="sm"
                        variant="transparent"
                        onClick={onIconClick}
                        className="text-[#f9edffcc] transition opacity ml-auto p-0.5 text-sm size-6 hover:bg-gray-700"
                    >
                        <PlusIcon className="size-4 text-white" />
                    </Button>
                )}
            </div>

            {/* Children Content (if open) */}
            {open && <div className="ml-4">{children}</div>}
        </div>
    );
};



// need two button first one channel  with plus icon on right side 
// and second button name of channel 
// 