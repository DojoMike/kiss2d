using Kiss2D;

namespace Pong
{
    class Player : GameObject
    {
        public override void Draw()
        {
            Canvas.FillStyle = "red";
            Canvas.FillRect(X, Y, Width, Height);
        }
    }
}
