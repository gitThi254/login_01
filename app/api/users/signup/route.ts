import bcryptjs from "bcryptjs";
import User from "@/models/userModels";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
connect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log(reqBody);
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        {
          error: "User already exist",
        },
        { status: 400 }
      );
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    const saveUser = await newUser.save();
    return NextResponse.json(
      {
        message: "User created successfully",
        success: true,
        saveUser,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.mesage }, { status: 500 });
  }
}
