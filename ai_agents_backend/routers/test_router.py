from fastapi import APIRouter,Request
from controllers.test_controller import test_controller
router=APIRouter(
    prefix="/test",
    tags=["Test"]
)

@router.get("/")
async def test_endpoint(req:Request):
    return await test_controller(req)