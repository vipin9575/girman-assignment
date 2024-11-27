import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import profilePic from "../assets/ProfilePic.jpg";

const FetchDetailedDialog = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <Dialog open={!!user} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button>Fetch Details</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Fetched Details</DialogTitle>
          <DialogDescription>
            Here are the details of following employee.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 font-semibold text-xl">
          <h3>
            Name : {user.first_name} {user.last_name}
          </h3>
          <h3>Location : {user.city}</h3>
          <h3>Contact Number : {user.contact_number}</h3>
          <h3>Profile Image:</h3>
          <div>
            <img
              src={profilePic}
              alt="Profile"
              className="border p-2 border-slate-500"
            />
          </div>
        </div>
        <DialogClose asChild>
          <DialogFooter>
            <Button className="mt-4 float-end bg-white text-gray-800 hover:bg-gray-100 border border-gray-300">
              Close
            </Button>
          </DialogFooter>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default FetchDetailedDialog;
