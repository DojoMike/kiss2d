using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kiss2D
{
    /// <summary>
    /// This super-simple interface just makes sure objects have a "Draw" method
    /// Eventually the goal is to abstract this kind of stuff away, but for now I
    /// know we'll need it for the animation loop and probably other stuff.
    /// </summary>
    interface IDrawable
    {
        void Draw();
    }
}
