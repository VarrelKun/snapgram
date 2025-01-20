import { Models } from "appwrite";
import { Link } from "react-router-dom";
import FollowButton from "./FollowButton";
import { IUser } from "@/types";

type AllUserProps = {
    allUsers: Models.DocumentList<Models.Document> | undefined;
    currentUser: IUser; // Sesuaikan tipe currentUser dengan IUser
};

const GridUserList = ({ allUsers, currentUser }: AllUserProps) => {
    return (
        <ul className="flex flex-col gap-3 w-full">
            {allUsers?.documents.map((user: Models.Document) => (
                <li
                    key={user.$id}
                    className="flex items-center justify-between w-full max-w-full p-2 border rounded-md border-[#606083]"
                >
                    {/* Foto Profil */}
                    <Link to={`/profile/${user.$id}`} className="flex items-center gap-2">
                        <img
                            src={user.imageUrl || "assets/images/profile-placeholder.svg"}
                            alt={user.name || "profile"}
                            className="h-8 w-8 rounded-full"
                        />
                        {/* Informasi Pengguna */}
                        <div className="flex flex-col">
                            <h2 className="font-bold flex items-center gap-2 text-sm">
                                {user.name}
                                {user.isVerified && (
                                    <span className="h-5 w-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0,0,255.99536,255.99536"
                                            className="h-full w-full"
                                        >
                                            <g
                                                fill="none"
                                                fillRule="nonzero"
                                                stroke="none"
                                                strokeWidth="1"
                                                strokeLinecap="butt"
                                                strokeLinejoin="miter"
                                                strokeMiterlimit="10"
                                                strokeDasharray=""
                                                strokeDashoffset="0"
                                                fontFamily="none"
                                                fontWeight="none"
                                                fontSize="none"
                                                textAnchor="none"
                                                style={{ mixBlendMode: "normal" }}
                                            >
                                                <g transform="scale(5.33333,5.33333)">
                                                    <circle cx="24" cy="24" r="20" fill="#7670f9"></circle>
                                                    <path
                                                        d="M22.491,30.69c-0.576,0 -1.152,-0.22 -1.591,-0.659l-6.083,-6.084c-0.879,-0.878 -0.879,-2.303 0,-3.182c0.878,-0.879 2.304,-0.879 3.182,0l6.083,6.084c0.879,0.878 0.879,2.303 0,3.182c-0.439,0.439 -1.015,0.659 -1.591,0.659z"
                                                        fill="#ffffff"
                                                    ></path>
                                                    <path
                                                        d="M22.491,30.69c-0.576,0 -1.152,-0.22 -1.591,-0.659c-0.879,-0.878 -0.879,-2.303 0,-3.182l9.539,-9.539c0.878,-0.879 2.304,-0.879 3.182,0c0.879,0.878 0.879,2.303 0,3.182l-9.539,9.539c-0.439,0.439 -1.015,0.659 -1.591,0.659z"
                                                        fill="#ffffff"
                                                    ></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                )}
                            </h2>
                            <p className="text-sm text-primary-500">@{user.username}</p>
                        </div>
                    </Link>
                    {/* Tombol Follow */}
                    <FollowButton targetUserId={user.$id} currentUserId={currentUser.id} />
                </li>
            ))}
        </ul>
    );
};

export default GridUserList;
