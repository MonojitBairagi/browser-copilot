from fastapi import Request
async def welcome_middleware(req:Request,call_next):
    print("Welcome to Browser comPilot API")
    response=await call_next(req)
    return response