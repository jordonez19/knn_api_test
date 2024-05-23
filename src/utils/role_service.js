// role_service.js
import UserRole from "../models/user_roles";

export const grantRole = async (userId, roleId) => {
  try {
    await UserRole.create({
      user_id: userId,
      role_id: roleId,
      status: 1,
    });
    return { success: true, message: "Role granted successfully" };
  } catch (error) {
    throw new Error("Error granting role: " + error.message);
  }
};

export const revokeRole = async (userId, roleId) => {
  try {
    await UserRole.update(
      { status: 0 },
      {
        where: {
          user_id: userId,
          role_id: roleId,
          status: 1,
        },
      }
    );
    return { success: true, message: "Role revoked successfully" };
  } catch (error) {
    throw new Error("Error revoking role: " + error.message);
  }
};
