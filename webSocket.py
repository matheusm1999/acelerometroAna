import websockets
import asyncio

async def server(websocket,path):
    async for mensagem in websocket:
        await websocket.send(f'Mensagem recebida : {mensagem}')

start_server = websockets.serve(server,"localhost",8123)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
