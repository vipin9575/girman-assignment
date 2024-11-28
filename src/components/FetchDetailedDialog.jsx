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
      <DialogContent className="max-w-md sm:max-w-lg lg:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-2xl font-bold">
            Fetched Details
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-gray-600">
            Here are the details of following employee.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 font-medium text-sm sm:text-lg">
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
              className="border p-2 border-slate-500 rounded-md max-w-[200px] sm:max-w-[250px] h-auto"
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
